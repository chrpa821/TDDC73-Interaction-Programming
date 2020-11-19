// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Example 1'),
          backgroundColor: Colors.teal,
        ),
        body: MyBody(),
        ),
    );
  }
}

class MyBody extends StatelessWidget {
  MyBody({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[ //column of entire app
          Container(
            width: 180,
            height: 180,
            alignment: Alignment.center,
            child: new Image(image: AssetImage("profile.jpg")),
          ),
          Container( //my buttons
            margin: EdgeInsets.only(top:16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
              RaisedButton(
                onPressed: () {},
                child: const Text('Button', style: TextStyle(fontSize: 20)),
              ),
                RaisedButton(
                  onPressed: () {},
                  child: const Text('Button', style: TextStyle(fontSize: 20)),
                )
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(top:16),
            child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              RaisedButton(
                onPressed: () {},
                child: const Text('Button', style: TextStyle(fontSize: 20)),
              ),
              RaisedButton(
                onPressed: () {},
                child: const Text('Button', style: TextStyle(fontSize: 20)),
              )
            ],
          ),
          ),
          Container(
            child: Row(
              children: <Widget>[
                Container(
                  margin: EdgeInsets.only(
                    left: 20,
                    top: 30,
                  ),
                  child: Text("Email"),
                ),
                Container(
                  width: 180,
                  margin: EdgeInsets.only(
                    left: 80,
                    top: 30,
                  ),
                    child: TextField(
                      decoration: InputDecoration(
                        enabledBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.pink),
                        ),
                        focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.pink),
                        ),
                      ),
                    ),
                ),
              ],
            )
          )
        ]
      )
    );
  }
}