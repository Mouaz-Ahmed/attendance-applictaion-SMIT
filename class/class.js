import { adClassToDb, getClassFromFirebase, updateClassFromFirebase, deleteClassFromFirebase } from '../firebase.js'
window.createClass = async function () {
    var classStart = document.getElementById("classStart").value //
    var classEnd = document.getElementById("classEnd").value     //
    var schedule = document.getElementById("schedule").value//
    var teacherName = document.getElementById("teacherName").value//
    // web and mobile or graphic designs 
    var section = document.getElementById("section").value//
    var courseSelect = document.getElementById("courseSelect");
    var courseValue = courseSelect.options[courseSelect.selectedIndex].value;
    var batch = document.getElementById("batch").value//
    try {
        await adClassToDb({ classStart, classEnd, schedule, teacherName, section, courseValue, batch })
        alert("succesfull")

    } catch (e) {
        alert(e.message)
    }
}
getClassInfo()
// getting class from firebase
let classInfo;
async function getClassInfo() {
    classInfo = await getClassFromFirebase();
    var tableBody = document.getElementById("tableBody")
    classInfo.forEach((item, index) => {
        tableBody.innerHTML += `
        <tr>
        <th scope = 'row'>${index+1}</th>
        <td>${item.teacherName}</td>
        <td>${item.courseValue}</td>
        <td>${item.section}</td>
        <td>${item.schedule}</td>
        <td>${item.batch}</td>
        <td>${item.classStart} to ${item.classEnd}</td>
        <td><button id = "edit_classBtn" class = 'btn btn-dark edit_btn' onclick="editClasses('${item.id}')">Edit</button>
        <button id = "delete_classBtn"  class = 'btn btn-primary delete_btn' onclick="deleteClasses('${item.id}')">Delete</button> 
        </td>
        </tr>
        `
    })
// delete Class
window.deleteClasses = async function(classID){
    await deleteClassFromFirebase(classID);
    window.location.reload();
}
}
let classIdForUpdateClass;
window.editClasses = function (classId) {
    var classStart = document.getElementById("classStart") //
    var classEnd = document.getElementById("classEnd")     //
    var schedule = document.getElementById("schedule")//
    var teacherName = document.getElementById("teacherName")//
    var section = document.getElementById("section")//
    var batch = document.getElementById("batch")//

    classInfo.forEach((item) => {
        if (item.id === classId) {
            teacherName.value = item.teacherName;
            classStart.value = item.classStart;
            classEnd.value = item.classEnd;
            schedule.value = item.schedule;
            section.value = item.section;
            batch.value = item.batch

            classIdForUpdateClass = item.id;
        }
    })
    document.getElementById("createClassBtn").style.display = 'none'
    document.getElementById("updateClassBtn").style.display = 'inline'
}
// ubdate class
window.updateClass = async function () {
    var classStart = document.getElementById("classStart").value //
    var classEnd = document.getElementById("classEnd").value     //
    var schedule = document.getElementById("schedule").value//
    var teacherName = document.getElementById("teacherName").value//
    var section = document.getElementById("section").value//
    var batch = document.getElementById("batch").value//

    await updateClassFromFirebase(classIdForUpdateClass, { classStart, classEnd, schedule, teacherName, section, batch })
    window.location.reload();
}
export default classInfo;