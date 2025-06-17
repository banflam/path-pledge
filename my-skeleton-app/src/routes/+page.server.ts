import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {error} from "@sveltejs/kit";
import {randomUUID} from 'crypto';