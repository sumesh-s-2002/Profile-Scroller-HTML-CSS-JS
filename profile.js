//defining an array of data to iterate
const data = [
    {name : "kannan", age : 34,location : "putjenkulam", gender : "male", image : "http://randomuser.me/api/portraits/men/52.jpg"},
    {name : "arathy", age : 34,location : "paravur", gender : "female", image : "http://randomuser.me/api/portraits/women/52.jpg"},
    {name : "sibin", age : 34,location : "punalur", gender : "male", image : "http://randomuser.me/api/portraits/men/53.jpg"},
    {name : "shahana", age : 34,location : "anjal", gender : "female", image : "http://randomuser.me/api/portraits/women/53.jpg"},
    {name : "rijin", age : 34,location : "parippally", gender : "male", image : "http://randomuser.me/api/portraits/men/54.jpg"}
]
//iterator with nex functionality
function iterateData(data){
    let lastIndex = 0;
    return {
        next : function(){
            return lastIndex < data.length ? 
            {value : data[lastIndex++], done : false} : 
            {done : true }
        }
    }
}
///calling
const profile = iterateData(data)
nextProfile();
//adding event listner to next button
document.querySelector(".btn-black").addEventListener("click", nextProfile)
//defining next nextProfile
function nextProfile(){
    let nxtprofile = profile.next().value;
    console.log(profile)
    if(nxtprofile !== undefined){
        document.querySelector(".info-container").innerHTML = `
        <li>name: ${nxtprofile.name}</li>
        <li>age : ${nxtprofile.age}</li>
        <li>gender : ${nxtprofile.gender}</li>
        <li>location : ${nxtprofile.location}</li>
        `
        document.querySelector(".image-container").innerHTML = `
        <img src= ${nxtprofile.image}>
        `
    }else{
        location.reload()
    }
}



