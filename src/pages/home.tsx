import React from "react";
import { TextField } from "../components/text-field";
import { Layout } from "../components/layout";
import { SizeBox } from "../components/size-box";

const component: React.FC = () => (
  <>
    <div>
      <TextField size={1} value="Size 1" />
    </div>

    <div>
      <TextField size={2} value="Size 2 (default)" />
    </div>

    <div>
      <Layout>
        <TextField size={1} value="Size 1" />
        <TextField size={1} value="Size 1" />
      </Layout>
    </div>

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
);

export { component as Home };
