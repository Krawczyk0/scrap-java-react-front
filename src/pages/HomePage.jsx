import { useEffect, useState } from "react";
import ScrapCard from "../components/custom/ScrapCard";
import useGetScraps from "../services/useGetScraps";
import { SimpleGrid, Skeleton, Box, Button } from "@chakra-ui/react";
import MainTemplate from "./MainTemplate";
import useExcelExport from "../services/useExcelExport";

const HomePage = () => {
  const { data, isLoading } = useGetScraps();
  const [showData, setShowData] = useState(false);
  const scraps = data?.data;

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowData(true);
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  const {mutateAsync: toExcel} = useExcelExport()

  const handleGenerateExcel = async () => {
      await toExcel(data.data)
  }

  return (
    <MainTemplate>
      <Button onClick={handleGenerateExcel}>Eksportuj</Button>
    <div>
     
      <SimpleGrid columns={3} spacing={5} p={5}>
        {isLoading || !showData
          ? Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} maxW="md">
                <Skeleton height="200px" mb="4" />
                <Skeleton height="20px" mb="2" />
                <Skeleton height="20px" width="60%" />
              </Box>
            ))
          : scraps?.map((scrap) => (
              <ScrapCard
                key={scrap.id}
                title={scrap.title}
                image={scrap.image}
                date={scrap.date}
                link={scrap.link}
                id={scrap.id}
              />
            ))}
      </SimpleGrid>
    </div>
    </MainTemplate>
  );
};

export default HomePage;