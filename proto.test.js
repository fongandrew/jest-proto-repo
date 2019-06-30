describe("Spying on protoypes", () => {
  const A = { test: () => 1 };

  const B = Object.create(A);

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("works with B", () => {
    jest.spyOn(B, "test").mockReturnValue(3);
    expect(B.test()).toEqual(3);
  });

  it("works with A", () => {
    jest.spyOn(A, "test").mockReturnValue(2);
    expect(B.test()).toEqual(2);
  });
});

describe("Spying on class protoypes", () => {
  class A {
    test() {
      return 1;
    }
  }

  class B extends A {}

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("works with B", () => {
    jest.spyOn(B.prototype, "test").mockReturnValue(3);
    expect(new B().test()).toEqual(3);
  });

  it("works with A", () => {
    jest.spyOn(A.prototype, "test").mockReturnValue(2);
    expect(new B().test()).toEqual(2);
  });
});
