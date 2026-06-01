param(
    [string]$Message = "Add loukperi core module pages"
)

git add .
git commit -m $Message
git push