window.addEventListener('DOMContentLoaded', (even) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const innerHtml = `
        <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
        </tr>
        <tr>
                <td>Sandip Kengar</td>
                <td>Kalamboli</td>
                <td>Kalamboli</td>
                <td>Maharashtra</td>
                <td>410218</td>
                <td>+91 9874563214</td>
                <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="../create-black-18dp.svg">
            </td>
        </tr>
        `;
    document.querySelector('#display').innerHTML = innerHtml;
} 