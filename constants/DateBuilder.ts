class DateBuilder {
  private date: Date;

  constructor() {
    this.date = new Date(0); // Initialize with epoch time
  }

  setYear(year: number): this {
    this.date.setFullYear(year);
    return this;
  }

  setMonth(month: number): this {
    this.date.setMonth(month);
    return this;
  }

  setDate(date: number): this {
    this.date.setDate(date);
    return this;
  }

  setHours(hours: number): this {
    this.date.setHours(hours);
    return this;
  }

  setMinutes(minutes: number): this {
    this.date.setMinutes(minutes);
    return this;
  }

  build(): Date {
    return new Date(this.date.getTime()); // Return a new Date instance
  }
}
