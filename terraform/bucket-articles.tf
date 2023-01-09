resource "aws_s3_bucket" "articles" {
  bucket = "${var.env}-articles.pairingwith.me"
}

resource "aws_s3_bucket_acl" "articles" {
  bucket = aws_s3_bucket.articles.id
  acl = "private"
}