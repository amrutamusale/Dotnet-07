import { TwitRecord } from './Twit'

describe('Model: Twit Record', () => {
  it('The Twit Record Model should be able to initialize a new populated Twit record', () => {
    let blankTwit = new TwitRecord();
    expect(TwitRecord.instanceOf(blankTwit)).toBeTrue();
    expect(blankTwit instanceof TwitRecord).toBeTrue();
  });

  it('The Twit Record Model should be able accept data for a previously initialized Twit record', () => {
    let id = TwitRecord.generateId();
    let created = Date.now();
    let updated = Date.now();
    let userId = TwitRecord.generateId();
    let TwitText = 'Testing attention please!';
    let recordObj = { id, created, updated, userId, TwitText };
    let prevRecord = new TwitRecord(recordObj);
    expect(TwitRecord.instanceOf(prevRecord)).toBeTrue();
    expect(prevRecord instanceof TwitRecord).toBeTrue();
    expect(prevRecord.id).toEqual(id);
    expect(prevRecord.created).toEqual(created);
    expect(prevRecord.updated).toEqual(updated);
    expect(prevRecord.userId).toEqual(userId);
    expect(prevRecord.TwitText).toEqual(TwitText);
  });

  it('The Twiet Record Model should be to initialize a new Twit Record with only the user id and the text of the Twit', () => {
    let userId = TwitRecord.generateId();
    let TwitText = 'Testing once again!';
    let partialTwit = { userId, TwitText };
    expect(TwitRecord.partialInstanceOf(partialTwit)).toBeTrue();
    let newTwit = new TwitRecord(partialTwit);
    expect(TwitRecord.instanceOf(newTwit)).toBeTrue();
    expect(newTwit instanceof TwitRecord).toBeTrue();
  });

  it('The Twiet Record Model should be able to throw an error when initializing with a malformed object', () => {
    let id = TwitRecord.generateId();
    let recordObj = { id };
    try {
      let prevRecord = new TwitRecord(recordObj);
    } catch (e) {
      expect(e).toBeDefined();
      console.error(e);
    }
  });
});