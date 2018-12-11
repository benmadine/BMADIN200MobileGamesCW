package com.example.bmad.bmadin200mobilegamesdevelopmentcoursework;

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//


import android.accessibilityservice.GestureDescription;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.SoundPool;
import android.os.Build;
import android.webkit.JavascriptInterface;

//
// ────────────────────────────────────────────────────────────── II ──────────
//   :::::: S O U N D   C L A S S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
//


public class iSound
{
    private Context ctx;
    private SoundPool sounds = null;
    private int[] soundIDs = new int[3];
    private String[] musicIDs = new String[2];
    private MediaPlayer music;

    iSound(final Context context)
    {
        //cache the app context
        ctx = context;

        //create a sound pool
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            GestureDescription.Builder dioAttributes;
            sounds = new SoundPool.Builder().setMaxStreams(3).setAudioAttributes(new AudioAttributes.Builder()
                            .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC).build()).build(
            );
        }
        else {
            sounds = new SoundPool(3, AudioManager.STREAM_MUSIC, 0);
        }

        //load sounds into sound pool
        try {
            //Load sound using the asset file descriptor
            AssetFileDescriptor afd = ctx.getAssets().openFd("AlienMovementMusic.mp3");
            //store the id outputted by the sound pool in the sound effects array
            soundIDs[0] = sounds.load(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength(), 0);
            afd.close();

            afd = ctx.getAssets().openFd("ButtonClickMusic.mp3");
            soundIDs[1] = sounds.load(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength(), 0);

            afd = ctx.getAssets().openFd("ExplosionMusic.mp3");
            soundIDs[2] = sounds.load(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength(), 0);
        }
        catch(Exception e) {
            e.printStackTrace();
        }

        musicIDs[0] = "SpaceBackgroundMusic.mp3";
        musicIDs[1] = "MainGameMusic.mp3";

        music = new MediaPlayer();
    }

    @JavascriptInterface
    public void playSound(int id)
    {
        //sound pool is used for short sound clips
        sounds.play(soundIDs[id], 1, 1, 0, 0, 1);
    }

    @JavascriptInterface
    public void playMusic(int id)
    {
        //media player is used for longer music tracks
        music.reset();//reset player as we are changing tracks
        try {
            //load the file and prepare the media player
            AssetFileDescriptor afd = ctx.getAssets().openFd(musicIDs[id]);
            music.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
            afd.close();
            music.setLooping(true); //we set our music track to loop
            music.prepare();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        music.start();
    }
}

