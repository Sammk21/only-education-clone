import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UniversityTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="courses&fees">Courses & Fees</TabsTrigger>
        <TabsTrigger value="admission">Admission</TabsTrigger>
        <TabsTrigger value="placement">Placement</TabsTrigger>
        <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default UniversityTabs;
