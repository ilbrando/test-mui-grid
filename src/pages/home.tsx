import React from "react";
import { TextField } from "../components/text-field";
import { Layout } from "../components/layout";
import { SizeBox } from "../components/size-box";
import { Grid, Box } from "@material-ui/core";
import { GroupContainer } from "../components/group-container";

const DemoContent: React.FC = () => (
  <>
    <GroupContainer>
      <div>
        <TextField size={1} value="Size 1" />
      </div>

      <>
        <div>
          <TextField size={2} value="Size 2 (default)" />
        </div>

        <div>
          <Layout>
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>
      </>

      <>
        <div>
          <TextField size={3} value="Size 3" />
        </div>

        <div>
          <Layout>
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>

        <div>
          <Layout>
            <TextField size={1} value="Size 1" />
            <TextField size={2} value="Size 2" />
          </Layout>
        </div>

        <div>
          <Layout>
            <TextField size={2} value="Size 2" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>
      </>

      <>
        <div>
          <TextField size={4} value="Size 4" />
        </div>

        <div>
          <Layout>
            <TextField size={2} value="Size 2" />
            <TextField size={2} value="Size 2" />
          </Layout>
        </div>
        <div>
          <Layout>
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>
      </>

      <>
        <div>
          <Layout bgcolor="#e5ffcc">
            <SizeBox size={2}>
              <div>LEFT</div>
              <TextField size={1} value="Size 1" />
            </SizeBox>
            <SizeBox size={2}>
              <div>RIGHT</div>
              <Layout bgcolor="#ccffe5">
                <TextField size={1} value="Size 1" />
                <TextField size={1} value="Size 1" />
              </Layout>
            </SizeBox>
          </Layout>
          <Layout bgcolor="#99ccff">
            <TextField size={2} value="Size 2" />
          </Layout>
          <Layout bgcolor="#ff99ff">
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>
      </>

      <>
        <div>
          <Layout bgcolor="#e0e0e0">
            <SizeBox size={1}>
              <div>LEFT</div>
              <TextField size={1} value="Size 1" />
            </SizeBox>
            <SizeBox size={3}>
              <div>RIGHT</div>
              <Layout bgcolor="#ccffe5">
                <TextField size={1} value="Size 1" />
                <TextField size={2} value="Size 2" />
              </Layout>
            </SizeBox>
          </Layout>
          <Layout bgcolor="#99ccff">
            <TextField size={2} value="Size 2" />
          </Layout>
          <Layout bgcolor="#ff99ff">
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </div>
      </>
    </GroupContainer>
  </>
);

const Card: React.FC = props => (
  <Box p={2} ml={1} mr={1} mb={2} bgcolor="#e0e0fd">
    {props.children}
  </Box>
);

const component: React.FC = () => (
  <Box display="flex">
    <Box width="200px" bgcolor="#cccccc">
      SIDEBAR
    </Box>
    <Box p={1}>
      <Grid container>
        <Grid item md={12} lg={6}>
          <Card>
            <DemoContent />
          </Card>
        </Grid>
        <Grid item md={12} lg={6}>
          <Card>
            <DemoContent />
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Box>
);
export { component as Home };
