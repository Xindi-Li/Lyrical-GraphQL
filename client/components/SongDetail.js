import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router-dom';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component{
    render(){
        let song = null;
        if(this.props.data.loading){
            song = <div>Loading...</div>;
        }else{
            song = (
                <div>
                    <Link to="/">Back</Link>
                    <h3>{this.props.data.song.title}</h3>
                    <LyricList lyrics={this.props.data.song.lyrics}/>
                    <LyricCreate id={this.props.match.params.id}/>
                </div>
            );
        }
        return song;
    }
}


export default graphql(fetchSong, {
    options: (props) => ({variables: {id: props.match.params.id}})
})(SongDetail);