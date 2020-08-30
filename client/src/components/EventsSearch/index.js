import React, { Component } from "react";
import Axios from "axios";
import Search from "./Search/index";
import Carousel from "./Carousel/index";
// import Data from "./Data.json";

// SEE ALL EVENTS
// on page load user will be presented a search bar <Search /> and when a user selects the dropdown appended to the bar and selects the see all events button the following will happen...

// A <Carousel /> component will be rendered below the search bar
// Inside the carousel will be <CardDecks/> which will contain three <Cards /> on each slide.
//  Each <Card /> will display Event data from our event Model (event Org, location, host, contact info, etc)
// Each <Card /> will also have a "Attend" Button that will register (Post) that the user intends on attending the event.
// Each <Card /> will also have a "i" button for more information the event (retrieved from the description column from the events Model ) and when selected a modal showing the description will appear

//

export default class EventsSearch extends Component {
  state = {
    filter: "Filter",
    disabled: true,
    searchInput: "",
    showCarousel: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    eventData: [],
    madeRequest: false,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleFilterOption = (event) => {
    this.setState({ filter: event.target.innerHTML, disabled: false });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        // console.log(response);
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });

        if (
          this.state.filter === "Location" &&
          this.state.madeRequest === true
        ) {
          const filteredLocation = this.state.eventData.filter(
            (detail) => detail.city === this.state.searchInput
          );
          this.setState({
            eventData: filteredLocation,

            showCarousel: true,
            slidesToShow: filteredLocation.length,
            slidesToScroll: filteredLocation.length,
            madeRequest: false,
            searchInput: "",
          });
        }
        if (
          this.state.filter === "Event Name" &&
          this.state.madeRequest === true
        ) {
          const filteredEv = this.state.eventData.filter(
            (detail) => detail.event_name === this.state.searchInput
          );
          this.setState({
            eventData: filteredEv,

            showCarousel: true,
            slidesToShow: filteredEv.length,
            slidesToScroll: filteredEv.length,
            madeRequest: false,
            searchInput: "",
          });
        }
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false, showCarousel: false })
    );
  };

  handleShowAll = (event) => {
    event.preventDefault();
    Axios.get("/api/create/eventcreate").then(
      (response) => {
        // console.log(response);
        this.setState({
          eventData: response.data,
          madeRequest: true,
        });
      },
      (error) => {
        this.setState({
          error,
        });
      },
      this.setState({ madeRequest: false })
    );
    this.setState({ showCarousel: true, slidesToShow: 3, slidesToScroll: 3 });
  };

  render() {
    let renderCarousel = null;
    if (this.state.showCarousel === true) {
      renderCarousel = <Carousel state={this.state} />;
    } else if (this.state.showCarousel === "") {
      renderCarousel = null;
    }
    console.log(this.state.eventData);

    return (
      <>
        <Search
          onChange={this.onChange}
          handleFilterOption={this.handleFilterOption}
          handleFilterSubmit={this.handleFilterSubmit}
          handleShowAll={this.handleShowAll}
          postNewEvent={this.postNewEvent}
          state={this.state}
        />
        {renderCarousel}
      </>
    );
  }
}
