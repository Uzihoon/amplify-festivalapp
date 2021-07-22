import API from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {} from './graphql';

export default function Performance() {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchPerformanceInfo();
  }, []);

  async function fetchPerformanceInfo() {
    try {
      const talkInfo = await API.graphql({
        query: getPerformance
      });
    }
  }
}
