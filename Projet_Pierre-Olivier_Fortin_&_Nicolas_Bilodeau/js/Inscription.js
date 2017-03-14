function verifier(f)
{
    var _Prenom = verifPrenom(f.Prenom);
    var _Nom = verifNom(f.Nom);
    var _Age = verifAge(f.Âge);
    var _Adresse = verifAdresse(f.Adresse);
    var _Ville = verifVille(f.Ville);
    var _Telephone = verifTelephone(f.Téléphone);
    var _Email = verifMail(f.Email);
    var _NomUtilisateur = verifNomUtilisateur(f.NU);
    var _MDP = verifMDP();
    var _Sexe = verifSuis();
    var _RSexe = verifRecherche();
    var _Int = verifIntérêt();

    if (_Prenom && _Nom && _Age && _Adresse && _Ville && _Telephone && _Email && _NomUtilisateur && _MDP && _Sexe && _RSexe && _Int)
    {
        return true;
    }
    else
    {
        alert ("Vérifier vos informations");
        return false;
    }
}

function surligne(champ, erreur)
{ 
    if(erreur)
    {
        champ.style.backgroundColor = "#fba"; 
    }
    else 
    {
        champ.style.backgroundColor = "";
    }
}

function verifPrenom(champ)
{
    var regex = /^([a-zA-ZÀàÄäÉéËëÈèÊêÏïÎîÙùÜü-]{1,})$/;
    
    if (!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifNom(champ)
{
    var regex =/^([a-zA-ZÀàÄäÉéËëÈèÊêÏïÎîÙùÜü-]{1,})$/;
    
    if (!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifVille(champ)
{
    var regex =/^([a-zA-ZÀàÄäÉéËëÈèÊêÏïÎîÙùÜü-]{1,})$/;
    
    if (!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifAge(champ)
{
    var _age = parseInt(champ.value);
    
    if(isNaN(_age) || _age < 18 || _age > 100)
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifAdresse(champ)
{
    var regex =/^([0-9]{2,5})+ [a-zA-Z-ÀàÄäÉéËëÈèÊêÏïÎîÙùÜü ]+$/;
    
    if (!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifTelephone(champ)
{
    var regex = /^([0-9]{3})+-([0-9]{3})+-([0-9]{4})$/;
    
    if(!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifMail(champ)
{
    var regex = /^([\w\.]+)@([\w]+)((\.(\w){2,3})+)$/;
    
    if(!regex.test(champ.value))
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifNomUtilisateur(champ)
{
    if(champ.value.length<5||champ.value.length>20)
    {
        surligne(champ,true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifMDP()
{
    var _MDP1 = document.getElementById('MDP');
    var _MDP2 = document.getElementById('CMDP');
    
    if (((_MDP1.value)!=(_MDP2.value)) || ((_MDP1.value == "") || (_MDP2.value == "")))
    {
        alert ("Les mots de passe ne correspondent pas ou n'ont pas été remplis.");
        _MDP1.style.backgroundColor = "#fba";
        _MDP2.style.backgroundColor = "#fba";
        return false;
    }
    else
    {
        _MDP1.style.backgroundColor = "";
        _MDP2.style.backgroundColor = "";
        return true;
    }
}

function verifSuis()
{
    var _RadH = document.getElementById('radH');
    var _RadF = document.getElementById('radF');
    var _RadA = document.getElementById('radA');
    
    if (_RadH.checked == false && _RadF.checked == false && _RadA.checked == false)
    {
        alert("Veuillez sélectionner votre sexe.")
        return false;
    }
    else
    {
        return true;
    }
}

function verifRecherche()
{
    var _ChkH = document.getElementById('chkH');
    var _ChkF = document.getElementById('chkF');
    var _ChkA = document.getElementById('chkA');
    
    if (_ChkH.checked == false && _ChkF.checked == false && _ChkA.checked == false)
    {
        alert("Veuillez sélectionner le sexe que vous recherchez.")
        return false;
    }
    else
    {
        return true;
    }
}

function verifIntérêt()
{
    var _ChkSP = document.getElementById('chkSp');
    var _ChkL = document.getElementById('chkL');
    var _ChkSo = document.getElementById('chkSo');
    var _ChkJV = document.getElementById('chkJV');
    var _ChkB = document.getElementById('chkB');
    var _ChkF = document.getElementById('chkFilm');
    var _ChkD = document.getElementById('chkD');

    if (_ChkSP.checked == false && _ChkL.checked == false && _ChkSo.checked == false && _ChkJV.checked == false && _ChkB.checked == false && _ChkF.checked == false && _ChkD.checked == false)
    {
        alert("Veuillez sélectionner au moins un champ d'intérêt.")
        return false;
    }
    else
    {
        return true;
    }
}



























