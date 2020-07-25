import React, { useState } from 'react';

import useFetchJobs from "./userFetchJobs";

import { Container } from "react-bootstrap";

import Job from "./Job";

import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {

    const param = e.target.name;
    const value = e.target.value;

    setPage(1);

    setParams(prevParams => { 

      return {...prevParams,[param]:value}
    })
  }

  return (

    <Container className="mt-5">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm className="mb-4" params={params} onParamChange={handleParamChange}/>

      {jobs.lenght !== 0 && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} className="mb-5"/>}
      {loading && <h6 className="text-muted my-5 text-center">Carregando...</h6>}
      {error && <h6 className="text-muted my-5 text-center">Oops! Ocorreu um erro, tente novamente mais tarde!</h6>}
      {jobs.map(job => (

        <Job key={job.id} job={job} />

      ))}
      {jobs.lenght !== 0 && <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />}
    </Container>
  );
}

export default App;
