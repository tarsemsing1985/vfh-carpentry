import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let inquiriesMap = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    if (Text.equal(name, "") or Text.equal(message, "")) {
      Runtime.trap("Name and message cannot be empty");
    };

    let inquiry : Inquiry = {
      id = nextId;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiriesMap.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiriesMap.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiriesMap.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    switch (inquiriesMap.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?_) {
        inquiriesMap.remove(id);
      };
    };
  };

  public query ({ caller }) func countInquiries() : async Nat {
    inquiriesMap.size();
  };
};
