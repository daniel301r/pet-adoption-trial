import React, { Component } from 'react';

import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: "gym7fcjyplnoZ2Vid2YV7hL9Qve3mp1rvwJfKzSVcokuYUds7W", 
  secret: "xfiEVqKi58j51pM0Y1aEpSU9dSn7iyU1McDAyab5",
  // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5ZTk2ZTQzOGY3ZWVmMDA0YzQyYTg2ZTQxMzg1Y2Q1M2IwNTIwMzE5MWZhMDFiYzkwYjU4YzIwNGQwZDNiY2EyNTE0ZGNhZmMwMzhiY2I5In0.eyJhdWQiOiJneW03ZmNqeXBsbm9aMlZpZDJZVjdoTDlRdmUzbXAxcnZ3SmZLelNWY29rdVlVZHM3VyIsImp0aSI6ImI5ZTk2ZTQzOGY3ZWVmMDA0YzQyYTg2ZTQxMzg1Y2Q1M2IwNTIwMzE5MWZhMDFiYzkwYjU4YzIwNGQwZDNiY2EyNTE0ZGNhZmMwMzhiY2I5IiwiaWF0IjoxNTcwMjg3Nzg4LCJuYmYiOjE1NzAyODc3ODgsImV4cCI6MTU3MDI5MTM4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.YmzeVLxmkKKYeFcWn8FmOiqQ7szq00nmOe-DB_zX4NFCzLtmVi2ycLA7uI4NnQuHTC2Mzq9U4uCgViX_bm0frY757k70QGbpVoHxZBfR6j6AdAsqVj0XjYmF-G5z0CCRjDbyNcAfGUzOLwv6_fu-V3CF3_raF-aSj8otA3cW6LRV9c_H8E3BEV5Pj1nUSVuXIrOLXAYwkNVG_NYYeYF2gQEjvLvyJ_BwC3NpHTzyYmG6UtCYscPyy4My2jl-NVtjj_lejYnm6mdO0Q-FmV4GAIQ-Fa2zMGtPTHlWiQRVC1UhopoJx2hK_t4_6PhMcqgMlf7OpmIBRueLBAz5F8l1Hw"
});

// client.authenticate('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI5ZTk2ZTQzOGY3ZWVmMDA0YzQyYTg2ZTQxMzg1Y2Q1M2IwNTIwMzE5MWZhMDFiYzkwYjU4YzIwNGQwZDNiY2EyNTE0ZGNhZmMwMzhiY2I5In0.eyJhdWQiOiJneW03ZmNqeXBsbm9aMlZpZDJZVjdoTDlRdmUzbXAxcnZ3SmZLelNWY29rdVlVZHM3VyIsImp0aSI6ImI5ZTk2ZTQzOGY3ZWVmMDA0YzQyYTg2ZTQxMzg1Y2Q1M2IwNTIwMzE5MWZhMDFiYzkwYjU4YzIwNGQwZDNiY2EyNTE0ZGNhZmMwMzhiY2I5IiwiaWF0IjoxNTcwMjg3Nzg4LCJuYmYiOjE1NzAyODc3ODgsImV4cCI6MTU3MDI5MTM4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.YmzeVLxmkKKYeFcWn8FmOiqQ7szq00nmOe-DB_zX4NFCzLtmVi2ycLA7uI4NnQuHTC2Mzq9U4uCgViX_bm0frY757k70QGbpVoHxZBfR6j6AdAsqVj0XjYmF-G5z0CCRjDbyNcAfGUzOLwv6_fu-V3CF3_raF-aSj8otA3cW6LRV9c_H8E3BEV5Pj1nUSVuXIrOLXAYwkNVG_NYYeYF2gQEjvLvyJ_BwC3NpHTzyYmG6UtCYscPyy4My2jl-NVtjj_lejYnm6mdO0Q-FmV4GAIQ-Fa2zMGtPTHlWiQRVC1UhopoJx2hK_t4_6PhMcqgMlf7OpmIBRueLBAz5F8l1Hw')

  // console.log(client.http.get('/animals').then(res => { console.log(res) }));

// // need to do this first to get the token then authenticate it after to use http
//   client.authenticate()
//   .then(res => {
//     const token = res.data.access_token;
//     const expires = res.data.expires_in;
//     console.log(token, expires)
//   })




class ShowAnimals extends Component {
    
    showAnimals = () => {
      
      // ---- SINGLE ANIMAL ----
      // list all animals
      // returns 20 animals
      client.animal.search({type: "Scales, Fins & Other"})
        .then(res => {
            // Do something with `response.data.animals`
            console.log(res)
        })
        .catch(err => {
            // Handle the error
            console.log(err)
        });

        // // - you can add in search parameters
        // client.animal.search({type: "Dog", size: "small", gender: "male", age: "adult", page: 2, limit: 100})
        //   .then(resp => {
        //     // Do something with resp.data.animals
        //     console.log('small dog', resp)
        //   });

          // client.animal.search({type: "Dog"})
          // .then(resp => {
          //   // Do something with resp.data.animals
          //   console.log('just dog', resp)
          // });

        // // - select one animal
        // client.animal.show(46187219)
        //   .then(resp => {
        //     // Do something with resp.data.animal
        //   });

      // // ---- TYPES ----
      // // list all animal types
      // // list 8 different animal types and returns - coats, colors, numbers
      // // could use these to create a string
      // client.animalData.types()
      //   .then(res => {
      //     // Do something with resp.data.types
      //     console.log(res)
      //   });

        // // this returns just the individual type data, i.e. coat, color, numbers
        // client.animalData.type('Dog')
        //   .then(resp => {
        //     // Do something with resp.data.type
        //     console.log(resp)
        //   });

          // // ---- BREEDS ----
          // // - this returns a massive list of breeds so would need to look through it
          // // and filter options
          // client.animalData.breeds('dog')
          //   .then(res => {
          //     console.log(res.data.breeds)
          //   });

    }
    
    render() {
        return (
            <div>
                <button onClick={this.showAnimals}>Click to show animal types</button>
            </div>
        )
    }
}

export default ShowAnimals;
