const { expect } = require("chai");

let counter;
let otherAccount;

describe("Counter", function () {
    async function init() {
        const [otherAccount] = await ethers.getSigners();

        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();
        console.log("counter:" + counter.address)
    }

    before(async function () {
        await init();
    });

    // 
    it("init equal 0", async function () {
        expect(await counter.counter()).to.equal(0);
        let tx = await counter.count();
        await tx.wait();
        expect(await counter.counter()).to.equal(1);
    });

    it("otherAccount call", async function () {
        expect(counter.connect(otherAccount).count()).to.be.revertedWith("not owner");
    });

});
