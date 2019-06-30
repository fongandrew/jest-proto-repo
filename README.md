# jest-proto-repo
Repro for Jest issue with spies and inheritance.

This demos that when spying on a object, it is possible to mock a method defined only that object's parent / prototype. But when the original implementation is restored, it's restored to the child object.
