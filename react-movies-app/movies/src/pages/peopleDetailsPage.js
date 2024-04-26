import React from "react";
import { useParams } from "react-router-dom";
import { getPeopleDetails, getPeopleCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PeopleDetails from "../components/peopleDetails";

const PeopleDetailsPage = () => {
    const { id } = useParams();

    const {
        data: peopleDetails,
        error: detailsError,
        isLoading: detailsLoading,
        isError: detailsErrorOccurred,
    } = useQuery(["peopleDetailsPage", { id: id }], getPeopleDetails);

    const {
        data: peopleCredits,
        error: creditsError,
        isLoading: creditsLoading,
        isError: creditsErrorOccurred,
    } = useQuery(["peopleCredits", { id: id }], getPeopleCredits);

    if (detailsLoading || creditsLoading) {
        return <Spinner />;
    }

    if (detailsErrorOccurred) {
        return <h1>{detailsError?.message}</h1>;
    }

    if (creditsErrorOccurred) {
        return <h1>{creditsError.message}</h1>;
    }

    return peopleDetails ? (
        <PeopleDetails details={peopleDetails} credits={peopleCredits} />
    ) : (
        <p>Waiting for people details</p>
    );
};

export default PeopleDetailsPage;
