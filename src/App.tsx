import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import {axiosInstance} from './api';

export function App(): React.JSX.Element {
  const [data, setdata] = useState<any>([]);
  const [isReachEnd, setIsReachEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/unknown', {params: {page}});
      const resData = res?.data?.data;

      if (!resData?.length) setIsReachEnd(true);

      !data?.length ? setdata(resData) : setdata([...data, ...resData]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={{marginVertical: 50}}>{item?.name}</Text>
        )}
        ListFooterComponent={() => {
          if (!loading) return <></>;
          return <ActivityIndicator />;
        }}
        onEndReached={() => {
          if (loading || isReachEnd) return;
          setPage(page + 1);
        }}
      />
    </SafeAreaView>
  );
}
