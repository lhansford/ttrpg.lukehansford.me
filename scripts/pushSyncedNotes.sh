if [[ -n $(git status -s) ]]
then
    git pull
    git status -s
    echo "The above notes have changed. Pushing changes to Github."
    git add .
    git commit -am "Update notes"
    git push
fi
