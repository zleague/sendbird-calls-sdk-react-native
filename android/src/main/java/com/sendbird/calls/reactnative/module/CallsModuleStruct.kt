package com.sendbird.calls.reactnative.module

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReadableNativeMap

interface CallsModuleStruct: CommonModule, DirectCallModule { }

interface CommonModule {
    fun initialize(appId: String, promise: Promise)

    fun getCurrentUser(promise: Promise)
    fun authenticate(userId: String, accessToken: String?, promise: Promise)
    fun deauthenticate(promise: Promise)

    fun registerPushToken(token: String, unique: Boolean, promise: Promise)
    fun unregisterPushToken(token: String, promise: Promise)
}

interface DirectCallModule {
    fun selectVideoDevice(callId: String, device: ReadableNativeMap, promise: Promise)
    fun selectAudioDevice(callId: String, device: String, promise: Promise)
    fun accept(callId: String, options: ReadableNativeMap, holdActiveCall: Boolean, promise: Promise)
    fun end(callId: String, promise: Promise)
    fun switchCamera(callId: String, promise: Promise)
    fun startVideo(callId: String)
    fun stopVideo(callId: String)
    fun muteMicrophone(callId: String)
    fun unmuteMicrophone(callId: String)
    fun updateLocalVideoView(callId: String, videoViewId: Int)
    fun updateRemoteVideoView(callId: String, videoViewId: Int)
}