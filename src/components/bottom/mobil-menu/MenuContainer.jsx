import React, { Component, createRef } from "react";

class MenuContainer extends Component {
    constructor(props) {
      super(props)
      this.myRef = createRef();
    }

    homeR() {
        let height = document.getElementById("home-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("home-menu-container");
        container.style.marginTop = -half+"px";
    }

    missionR() {
        let height = document.getElementById("mission-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("mission-menu-container");
        container.style.marginTop = -half+"px";
    }

    hokageR() {
        let height = document.getElementById("hokage-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("hokage-menu-container");
        container.style.marginTop = -half+"px";
    }

    cityR() {
        let height = document.getElementById("city-menu-container");
        let half = (height.offsetHeight / 2) - 17;
        console.log(half);
        let container = document.getElementById("city-menu-container");
        container.style.marginTop = -half+"px";
    }

    jutsuR() {
        let height = document.getElementById("jutsu-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("jutsu-menu-container");
        container.style.marginTop = -half+"px";
    }

    weaponR() {
        let height = document.getElementById("weapon-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("weapon-menu-container");
        container.style.marginTop = -half+"px";
    }

    ranklistR() {
        let height = document.getElementById("ranklist-menu-container");
        let half = (height.offsetHeight / 2) - 20;
        let container = document.getElementById("ranklist-menu-container");
        container.style.marginTop = -half+"px";
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        this.homeR()
        this.missionR()
        this.hokageR()
        this.cityR()
        this.jutsuR()
        this.weaponR()
        this.ranklistR()
    }

    render() {
        return (
            <ul className={`${ this.props.cls }-menu-container`} id={`${ this.props.cls }-menu-container`}>
                <li>
                    <section ref={ this.myRef } className="mm">
                        { this.props.children }
                    </section>
                </li>
            </ul>
        );
    }
}

export default MenuContainer;