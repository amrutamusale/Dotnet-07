import { Record, BasicRecordSchema, BasicRecordInterface } from './BasicRecord';

interface TwitPartialSchema {
  TwitText: string | null;
  userId: string | null;
}

type TwitSchema = TwitPartialSchema & BasicRecordSchema;

class TwitRecord extends Record implements BasicRecordInterface {
  public TwitText: string;
  public userId: string;
  protected static MemberVariblesNames: Array<string> = [ 'TwitText', 'userId' ];

  constructor ( data?: Partial<TwitSchema> ) {
    super();
    if (data) {
      if ( TwitRecord.instanceOf(data) ) {
        Object.assign(this, data);
      }
      else if ( TwitRecord.partialInstanceOf(data) ) {
        const record = { ...this.initEmptyRecord(), ...data}
        Object.assign(this, record);
      }
      else if ( Object.keys(data).length < 2 ){
        const dString = JSON.stringify(data);
        throw new Error(`Attempted to initialize a Twit Record with a malformed object: ${dString}`);
      }
    }
    else {
      Object.assign(this, this.initEmptyRecord());
    }
  }

  public initEmptyRecord(userId = null, TwitText = null): TwitSchema {
    const basicRecord = super.initEmptyRecord();
    const record = {
      ...basicRecord,
      TwitText,
      userId
    };
    return record;
  }
}

export { TwitRecord, TwitPartialSchema, TwitSchema }