namespace train.Model
{
    public class Task
    {
        public Guid Id { get; }
        public string Name { get; set; }
        public DateTime LimitDate { get; set; }
        public bool Completed { get; set; }
        public bool Deleted { get; set; }

        public Task(string name, DateTime limitDate)
        {
            Id = Guid.NewGuid();
            Name = name;
            LimitDate = limitDate;
            Completed = false;
            Deleted = false;
        }
    }
}
