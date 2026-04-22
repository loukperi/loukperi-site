param(
    [string]$Message = "whatever"
)

git add .
git commit -m $Message
git push