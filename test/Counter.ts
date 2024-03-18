import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", () => {
    let counter: any;

    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy("Donib Irakihda", 5);
    });

    describe("Deployment", () => {
        it("sets the initial count", async () => {
            expect(await counter.count()).to.equal(5);
        });

        it("sets the initial name", async () => {
            expect(await counter.name()).to.equal("Donib Irakihda");
        });
    });

    describe("Counting", () => {
        it("increments the count", async () => {
            let tx = await counter.increment();
            tx.wait();
            expect(await counter.count()).to.equal(6);
        });

        it("decrements the count", async () => {
            await counter.decrement();
            expect(await counter.count()).to.equal(4);
        });

        it("reads the name from the public variable", async () => {
            expect(await counter.name()).to.equal("Donib Irakihda");
        });

        it("reads the name from the public function", async () => {
            expect(await counter.getName()).to.equal("Donib Irakihda");
        });
    });
});
