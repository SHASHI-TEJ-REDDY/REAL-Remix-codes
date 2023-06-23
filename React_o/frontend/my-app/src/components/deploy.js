// import React from "react";
// import React from "react";
import React, { useEffect, useState } from "react";
import web3 from "web3";
import Web3 from "web3";
// import $ from "jquery";
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import detectEthereumProvider from "@metamask/detect-provider";
// import Web3Contract1 from "./Web3Contract1";
import Web3Contract1 from "./contract";


function Deploy() {


    const contract1 = Web3Contract1();
    // const [contract, setContract] = useState();
    // setContract(contract1[0]);
    const contract = contract1[1];
    const account = contract1[0];
    useEffect(() => {
        try {
            get();
            console.log("shashi");
        }
        catch (error) {
            console.log(error);
            console.log("shashi");
        }
    }, [contract]);



    const get = async () => {
        // window.reload();
        const data = await window.contract.methods.show().call();
        window.contract.methods.show().call().then((result) => {
            console.log(result);
            const tbody = document.getElementById("tbody");
            for (let i = 0; i < result.length; i++) {

                if (result[i].verificationstatus != "Rejected") {
                    const row = document.createElement("tr");
                    const cell1 = document.createElement("td");
                    cell1.innerHTML = i + 1;
                    const cell2 = document.createElement("td");
                    cell2.innerHTML = result[i][0];
                    const cell3 = document.createElement("td");
                    cell3.innerHTML = result[i][1];
                    const cell4 = document.createElement("td");
                    cell4.innerHTML = result[i][2];

                    const cell5 = document.createElement("td");
                    cell5.innerHTML = result[i][3];
                    const cell6 = document.createElement("td");
                    cell6.innerHTML = result[i][4];
                    const cell8 = document.createElement("td");
                    cell8.innerHTML = result[i][5];
                    const cell7 = document.createElement("td");
                    const btn = document.createElement("button");
                    const btn2 = document.createElement("button");
                    btn.textContent = "deploy";
                    // btn2.textContent = "Reject";
                    cell7.appendChild(btn);
                    // cell7.appendChild(btn2);
                    btn.classList.add("btn", "btn-dark")
                    btn2.classList.add("btn", "btn-dark")



                    btn.addEventListener("click", function () {
                        window.contract.methods.Deployed(result[i][0]).send({ from: account });

                    })
                    // btn2.addEventListener("click", function () {
                    //     window.contract.methods.findandreplynotverified(result[i][0]).send({ from: account });
                    // })


                    row.appendChild(cell1);
                    row.appendChild(cell2);
                    row.appendChild(cell3);
                    row.appendChild(cell4);
                    row.appendChild(cell5);
                    row.appendChild(cell8);
                    // row.appendChild(cell6);
                    row.appendChild(cell7);
                    tbody.appendChild(row);

                    $(function () {
                        $('#table4').DataTable();
                    });
                }
            }
        })
        // window.location.reload();
    }



    return (
        <>
            <br />
            <div class="container">
                <table id="table4" class="table table-striped table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Patch Nmae</th>
                            <th scope="col">Operation System</th>
                            <th scope="col">Application</th>
                            <th scope="col">Version</th>
                            <th scope="col">Descripition</th>
                            <th scope="col">deploy?</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Deploy;