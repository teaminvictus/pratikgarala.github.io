/**
 * Created by pratikgarala on 9/5/17.
 */

import React from 'react';

export default class RecordSightings extends React.Component {

    constructor(props) {
        super(props);
        this.onSendClicked = this.onSendClicked.bind(this);
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    onSendClicked(){

        if($("#name").val().length < 3){
            $("#errorMsg").text("Name must have more than 3 characters..!!");
        } else if(!this.validateEmail($("#email").val())){
            $("#errorMsg").text("Please verify your email address..!!");
        } else if($("#email").val().localeCompare($("#cnfEmail").val()) != 0){
            $("#errorMsg").text("Mismatch found in email address..!!");
        }else {

            $("#btnSend").val("Sending please wait...");
            $("#btnSend")[0].classList.add("btn-in-progress");
            // alert('send clicked..!!');
            event.preventDefault();
            //

            var payload = {
                "name": $("#name").val(),
                "email": $("#email").val()
            };



            var data = new FormData();
            data.append("json", JSON.stringify(payload));


            fetch("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
                {
                    method: "POST",
                    body: JSON.stringify(payload)

                })
                .then(function (res) {
                    if (res.status == 200) {
                        $("#inviteForm")[0].classList.add("hideElement");
                        $("#afterSend")[0].classList.remove("hideElement");
                    } else {
                        $("#btnSend").val("Send");
                        $("#btnSend")[0].classList.remove("btn-in-progress");
                        $("#errorMsg").text(res.statusText);
                    }
                    return res;
                }, function (err) {
                    $("#btnSend").val("Send");
                    $("#btnSend")[0].classList.remove("btn-in-progress");
                    $("#errorMsg").text("Please Check your network connection..!!");
                });
        }
    }

    handleOkBtn(){
        $("#inviteForm")[0].classList.remove("hideElement");
        $("#afterSend")[0].classList.add("hideElement");
        $("#btnSend").val("Send");
        $("#btnSend")[0].classList.remove("btn-in-progress");
        $("#name").val("");
        $("#email").val("");
        $("#cnfEmail").val("");

    }

    render(){
        return(
            <div className="portfolio-modal modal fade" id="inviteModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl">
                            </div>
                        </div>
                    </div>
                    {/*<div className="container">*/}
                    <div id="inviteForm" className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h3>Request an Invite</h3>
                                <hr className="star-primary"/>
                                <form onSubmit={() => {this.onSendClicked()}}>
                                    <div className="row bottom_margin_20">
                                        <div className="col-lg-12">
                                            <input type="text" id="name" placeholder="Full Name"  required/>
                                        </div>
                                    </div>
                                    <div className="row bottom_margin_20">
                                        <div className="col-lg-12">
                                            <input type="text" id="email" placeholder="Email"  required/>
                                        </div>
                                    </div>
                                    <div className="row bottom_margin_20">
                                        <div className="col-lg-12">
                                            <input type="text" id="cnfEmail" placeholder="Confirm email"  required/>
                                        </div>
                                    </div>
                                    <div className="row bottom_margin_20">
                                        <div className="col-lg-12">
                                            <input id="btnSend" type="button" value="Send" className="btn btn-default" onClick={() => {this.onSendClicked()}}/>
                                        </div>
                                    </div>
                                    <div className="row bottom_margin_20">
                                        <div id="errorMsg" className="col-lg-12">

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="afterSend" className="row hideElement">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h3>All Done</h3>
                                <hr className="star-primary"/>
                                <p>
                                    You will be one of the first to experience Broccoli & co. when we lunch.
                                </p>
                                <div className="row bottom_margin_20">
                                    <div className="col-lg-12">
                                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.handleOkBtn()}>
                                        Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
        );
    };
}





