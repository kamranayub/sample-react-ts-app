//
// This is a create-react-app convention file
// to setup tests automatically
//
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new Adapter() });