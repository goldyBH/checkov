import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class exampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pass = new s3.Bucket(this, 'example', {
      versioned: true
    });
  }
}

const app = new cdk.App();
new exampleStack(app, 'example-stack');
app.synth();
