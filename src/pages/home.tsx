import React from "react";
import { TextField } from "../components/text-field";
import { Layout } from "../components/layout";

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
  </>
);

export { component as Home };
