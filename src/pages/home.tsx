import React from "react";
import { TextField } from "../components/text-field";
import { Layout } from "../components/layout";
import { SizeBox } from "../components/size-box";

const component: React.FC = () => (
  <>
    <div>
      <h2>TextField size 1</h2>
      <TextField size={1} />
    </div>

    <div>
      <h2>TextField size 2 (= default)</h2>
      <TextField size={2} />
    </div>

    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={1} />
        <TextField size={1} />
      </Layout>
    </div>

    <div>
      <h2>TextField size 3</h2>
      <TextField size={3} />
    </div>

    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={1} />
        <TextField size={1} />
        <TextField size={1} />
      </Layout>
    </div>

    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={1} />
        <TextField size={2} />
      </Layout>
    </div>

    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={2} />
        <TextField size={1} />
      </Layout>
    </div>

    <div>
      <h2>TextField size 4</h2>
      <TextField size={4} />
    </div>

    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={2} />
        <TextField size={2} />
      </Layout>
    </div>
    <div>
      <h2>Layout</h2>
      <Layout>
        <TextField size={1} />
        <TextField size={1} />
        <TextField size={1} />
        <TextField size={1} />
      </Layout>
    </div>

    <div>
      <h2>Flere linjer (glem afstanden mellem dem)</h2>
      <Layout>
        <SizeBox size={2}>
          <div>LEFT</div>
          <TextField size={1} value="Size 1" />
        </SizeBox>
        <SizeBox size={2}>
          <div>RIGHT</div>
          <Layout>
            <TextField size={1} value="Size 1" />
            <TextField size={1} value="Size 1" />
          </Layout>
        </SizeBox>
      </Layout>
      <Layout>
        <TextField size={2} value="Size 2" />
      </Layout>
      <Layout>
        <TextField size={1} value="Size 1" />
        <TextField size={1} value="Size 1" />
      </Layout>
    </div>
  </>
);

export { component as Home };
