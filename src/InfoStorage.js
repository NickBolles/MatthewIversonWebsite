import React, { Component } from "react";

let OriginalSkillContainer(nameofSkill, imgForCircle, skillPercentage, linkToSkillWebsite) {
    this.nameofSkill = nameofSkill;
    this.imgForCircle = imgForCircle;
    this.skillPercentage = skillPercentage;
    this.linkToSkillWebsite = linkToSkillWebsite;
}
class Info extends Component {
    render() {
        return(
            <div>
                let Docker = new OriginalSkillContainer("Docker", "./Avatars/docker.png", 40, "https://www.docker.com/");
            </div>
        );
    }
}

export default Info;