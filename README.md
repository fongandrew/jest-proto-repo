# jest-proto-repo
Repro for Jest issue with spies and inheritance.

This demos that when spying on the prototype of a subclass, it is possible to mock a method defined only on the prototype of the parent class. But when the original implementation is restored, it's restored to the subclass's prototype.
