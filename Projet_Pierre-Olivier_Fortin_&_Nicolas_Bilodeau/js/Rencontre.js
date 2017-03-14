var checkState = [];

function likeUnlike(picId)
{   
    var picture = document.getElementById("likeBtn" + picId);
    if(checkState[picId - 1] == false || checkState[picId - 1] == null)
    {
        picture.src = "image/fullHeartRed.jpg";
        checkState[picId - 1] = true;
    }
    else if(checkState[picId - 1] == true)
    {
        picture.src = "image/emptyHeart.jpg";
        checkState[picId - 1] = false;
    }
             
}

function mouseOut(picId)
{   
    var picture = document.getElementById("likeBtn" + picId);
    if(checkState[picId - 1] == false || checkState[picId - 1] == null)
    {
        picture.src = "image/emptyHeart.jpg";
    }
}

function deleteProfile(picID)
{
    var target = document.getElementById("likeBtn" + picID);
    target.parentNode.parentNode.removeChild(target.parentNode);
}