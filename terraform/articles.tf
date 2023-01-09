variable "upload_directory" {
  default = "../files/"
}

resource "aws_s3_bucket_object" "article_files" {
  for_each      = fileset(var.upload_directory, "**/*.*")
  bucket        = aws_s3_bucket.articles.bucket
  key           = replace(each.value, var.upload_directory, "")
  source        = "${var.upload_directory}${each.value}"
  acl           = "public-read"
  etag          = filemd5("${var.upload_directory}${each.value}")
}