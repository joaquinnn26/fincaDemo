param(
  [int]$MaxSize = 1600,
  [int]$Quality = 74
)

Add-Type -AssemblyName System.Drawing

$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$sourceRoot = Join-Path $root 'public\images'
$targetRoot = Join-Path $sourceRoot 'optimized'
$extensions = @('.jpg', '.jpeg', '.png')

if (-not (Test-Path -LiteralPath $targetRoot)) {
  New-Item -ItemType Directory -Path $targetRoot | Out-Null
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' } |
  Select-Object -First 1

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality,
  [long]$Quality
)

$files = Get-ChildItem -LiteralPath $sourceRoot -Recurse -File |
  Where-Object {
    $extensions -contains $_.Extension.ToLowerInvariant() -and
    $_.FullName -notlike (Join-Path $targetRoot '*')
  }

foreach ($file in $files) {
  $relative = $file.FullName.Substring($sourceRoot.Length).TrimStart('\')
  $relativeDir = Split-Path -Parent $relative
  $relativeName = [System.IO.Path]::GetFileNameWithoutExtension($relative)
  $relativeNoExt = if ($relativeDir) { Join-Path $relativeDir $relativeName } else { $relativeName }
  $outputPath = Join-Path $targetRoot ($relativeNoExt + '.jpg')
  $outputDir = Split-Path -Parent $outputPath

  if (-not (Test-Path -LiteralPath $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
  }

  $image = $null
  $canvas = $null
  $graphics = $null

  try {
    $image = [System.Drawing.Image]::FromFile($file.FullName)

    if ($image.PropertyIdList -contains 274) {
      $orientation = [BitConverter]::ToUInt16($image.GetPropertyItem(274).Value, 0)

      switch ($orientation) {
        2 { $image.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
        3 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
        4 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
        5 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
        6 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
        7 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
        8 { $image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
      }
    }

    $ratio = [Math]::Min($MaxSize / $image.Width, $MaxSize / $image.Height)

    if ($ratio -gt 1) {
      $ratio = 1
    }

    $width = [Math]::Max(1, [int][Math]::Round($image.Width * $ratio))
    $height = [Math]::Max(1, [int][Math]::Round($image.Height * $ratio))

    $canvas = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($canvas)
    $graphics.Clear([System.Drawing.Color]::White)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.DrawImage($image, 0, 0, $width, $height)

    $canvas.Save($outputPath, $jpegCodec, $encoderParams)

    $beforeKb = [Math]::Round($file.Length / 1KB)
    $afterKb = [Math]::Round((Get-Item -LiteralPath $outputPath).Length / 1KB)
    Write-Output "$relative -> optimized\$relativeNoExt.jpg ($beforeKb KB -> $afterKb KB)"
  }
  catch {
    Write-Warning "No se pudo optimizar ${relative}: $($_.Exception.Message)"
  }
  finally {
    if ($graphics) { $graphics.Dispose() }
    if ($canvas) { $canvas.Dispose() }
    if ($image) { $image.Dispose() }
  }
}
