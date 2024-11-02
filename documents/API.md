## MOCKUP API FOR COURSE LIST OF STUDENT
RUN JSON-SERVER : npm run db-run
API: http://localhost:3000/course
DATA: 
[
  {
    id: String,
    class: String,
    teacher:String,
    semester: String,
    name: String,
    credit: Number,
    status: String,
    score: 
    {
      BT: Number | null,
      TN:  Number | null,
      BTL:  Number | null,
      GK:  Number | null,
      CK:  Number | null
    }
  }
]
