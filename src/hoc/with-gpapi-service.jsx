import React from 'react'

import { GpApiServiceConsumer } from "../components/gpapi-service-context";

const withGpApiService = () => (Wrapped) => {
  return (props) => (
    <GpApiServiceConsumer>
    {
      (gpApiService) => {
        return <Wrapped {...props} gpApiService={gpApiService} />
      }
    }
    </GpApiServiceConsumer>
  )
}

export default withGpApiService;