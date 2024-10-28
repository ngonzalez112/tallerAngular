export class Serie {
    id: number;
    name: string;
    description: string;
    foto: string;
    channel: string;
    seasons: number;
  
    constructor(id: number,name: string,description: string, foto: string, channel: string, seasons: number) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.foto = foto;
      this.channel = channel;
      this.seasons = seasons;
    }
  }
