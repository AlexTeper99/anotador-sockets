import { WssService } from './wss.service';

export class AnotattorService {
  constructor(private readonly wssService = WssService.instance) {}

  public async getAll() {
    console.log(this.wssService);
    return 'getAll';
  }

  //   private onTicketNumberChanged() {
  //     this.wssService.sendMessage('on-ticket-count-changed', this.pendingTickets.length);
  //   }

  //   private onWorkingOnChanged() {
  //     this.wssService.sendMessage('on-working-changed', this.lastWorkingOnTickets);
  //   }
}
