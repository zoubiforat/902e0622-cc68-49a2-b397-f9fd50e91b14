import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/cart/shopping-cart.service';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  @Input() eventInput: Event =   {
        "_id": "1463949",
        "title": "Fuego! with Om Unit, Ruby Savage, Iration Steppas, Jamie Rodigan, Pete OTC, Makin' Moves..",
        "flyerFront": "https://static.ra.co/images/events/flyer/2021/10/uk-1016-1463949-1809552-front.jpg?dateUpdated=1634114327453",
        "attending": 62,
        "date": "2021-10-16T00:00:00.000",
        "startTime": "2021-10-16T18:00:00.000",
        "endTime": "2021-10-17T04:00:00.000",
        "contentUrl": "/events/1463949",
        "venue": {
            "id": "185559",
            "name": "Colour Factory",
            "contentUrl": "/clubs/185559",
            "live": true,
            "direction": "https://www.google.com/maps/dir//Colour+Factory+london"
        },
        "pick": {
            "id": "14635",
            "blurb": "Now here's a lineup well-suited to a fully stacked rig. Dub meets jungle, dancehall and all sorts of other flavours at the intersection of sound system culture."
        },
        "artists": [
            {
                "id": "28072",
                "name": "Iration Steppas",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d10"
                }
            },
            {
                "id": "33135",
                "name": "Om Unit",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d11"
                }
            },
            {
                "id": "70700",
                "name": "Jamie Rodigan",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d12"
                }
            },
            {
                "id": "81974",
                "name": "Ruby Savage",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d13"
                }
            },
            {
                "id": "85880",
                "name": "Tommy Castro",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d14"
                }
            },
            {
                "id": "91376",
                "name": "Pete On the Corner",
                "_id": {
                    "$oid": "625c40e396c7a90c87f21d15"
                }
            }
        ],
        "city": "london",
        "country": "uk",
        "private": false,
        "__v": 0
    };

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToShoppingCart(): void {
      this.shoppingCartService.addEventToCart(this.eventInput);
  }

}
