export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <table>
            <tr>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        </tr>
        <textarea id="wd-description"  cols={45} rows={10}>
          The assignment is available online Submit a link to the landing page of your web application running on Netlify.
          The landing page should inculde the following :
          Your full name and section Links to each of your lab assignments.
          Link to Kanbas Web Application.
          Links to al relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        
        <tr>
            <label htmlFor="wd-points">Points</label>
            <input id="wd-points" value={100} />
        </tr>
        <br></br>
        <tr>
        <label htmlFor="wd-select-one-assignment group"> Assignment Group </label>
      
<select id="wd-select-one-assignment group">
   <option value="Value 1">Value 1</option>
   <option value="Value 2">Value 2</option>
   <option selected value="ASSIGNEMENTS">ASSIGNMENTS</option>
</select>
</tr>
<br></br>
<tr>
        <label htmlFor="wd-select-one-display grade"> Display Grade as </label>
<select id="wd-select-one-display grade">
   <option value="Point">Point</option>
   <option value="Grade">Grade</option>
   <option selected value="Percentage">Percentage</option>
</select>
</tr>
<br></br>
<tr>
        <label htmlFor="wd-select-one-submission type"> Submission Type </label>
       
<select id="wd-select-one-submission type">
   <option value="In-Person">In-Person</option>
   <option selected value="Online">Online</option>
</select>
</tr>
<tr>
<br></br>
<label>Online Entry Options</label><br/>

<input type="checkbox" name="check-entry option" id="wd-chkbox-text entry"/>
<label htmlFor="wd-chkbox-text entry">Text Entry</label><br/>

<input type="checkbox" name="check-entry option" id="wd-chkbox-website url"/>
<label htmlFor="wd-chkbox-website url">Website URL</label><br/>

<input type="checkbox" name="check-entry option" id="wd-chkbox-media recordings"/>
<label htmlFor="wd-chkbox-media recordings">Media Recordings</label><br/>

<input type="checkbox" name="check-entry option" id="wd-chkbox-student annotations"/>
<label htmlFor="wd-chkbox-student annotations">Student Annotations</label><br/>

<input type="checkbox" name="check-entry option" id="wd-chkbox-file uploads"/>
<label htmlFor="wd-chkbox-file uploads">File Uploads</label><br/>
<br/>
<div id="Assign">
  <div id="Assign">
  <label htmlFor="wd-name">Assign To</label>
  </div>
  <input type="text" id="Assign" placeholder="Everyone"></input>
</div>
<br/>
<label htmlFor="wd-text-fields-due"> Due </label>
<tr>
<input type="date" id="wd-text-fields-due" value="2024-05-13"/><br/>
      </tr>
      <tr>
<br></br>
<label htmlFor="wd-text-fields-due"> Availabe From </label>
<input type="date" id="wd-text-fields-due" value="2024-05-13"/>
      

<label htmlFor="wd-text-fields-due"> Until </label>
<input type="date"id="wd-text-fields-due" value="2024-05-13"/><br/>
</tr>
</tr>
      </table>
    </div>
);}
  