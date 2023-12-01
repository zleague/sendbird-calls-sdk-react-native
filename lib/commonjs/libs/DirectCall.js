"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectCall = void 0;

var _reactNative = require("react-native");

var _types = require("../types");

var _logger = require("../utils/logger");

var _NativeBinder = require("./NativeBinder");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DirectCall {
  /** @internal **/

  /** @internal **/
  static poolRelease() {
    DirectCall.pool = {};
  }
  /** @internal **/


  static get(binder, props) {
    if (!DirectCall.pool[props.callId]) DirectCall.pool[props.callId] = new DirectCall(binder, props);
    const directCall = DirectCall.pool[props.callId];
    return directCall._updateInternal(props);
  }

  constructor(binder, props) {
    var _this = this;

    _defineProperty(this, "_binder", void 0);

    _defineProperty(this, "_props", void 0);

    _defineProperty(this, "_internalEvents", {
      pool: [],
      emit: function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // @ts-ignore
        _this._internalEvents.pool.forEach(listener => {
          var _listener$event;

          return (_listener$event = listener[event]) === null || _listener$event === void 0 ? void 0 : _listener$event.call(listener, ...args);
        });
      },
      add: listener => {
        this._internalEvents.pool.push(listener);

        return () => {
          const index = this._internalEvents.pool.indexOf(listener);

          if (index > -1) delete this._internalEvents.pool[index];
        };
      }
    });

    _defineProperty(this, "addListener", listener => {
      _logger.Logger.info('[DirectCall]', 'addListener', this.callId);

      const unsubscribes = [];

      const disposeInternal = this._internalEvents.add(listener);

      const disposeNative = this._binder.addListener(_NativeBinder.CallsEvent.DIRECT_CALL, _ref => {
        let {
          type,
          data,
          additionalData
        } = _ref;
        if (data.callId !== this.callId) return;

        this._updateInternal(data);

        switch (type) {
          case _NativeBinder.DirectCallEventType.ON_ESTABLISHED:
            {
              var _listener$onEstablish;

              (_listener$onEstablish = listener.onEstablished) === null || _listener$onEstablish === void 0 ? void 0 : _listener$onEstablish.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_CONNECTED:
            {
              var _listener$onConnected;

              (_listener$onConnected = listener.onConnected) === null || _listener$onConnected === void 0 ? void 0 : _listener$onConnected.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_RECONNECTING:
            {
              var _listener$onReconnect;

              (_listener$onReconnect = listener.onReconnecting) === null || _listener$onReconnect === void 0 ? void 0 : _listener$onReconnect.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_RECONNECTED:
            {
              var _listener$onReconnect2;

              (_listener$onReconnect2 = listener.onReconnected) === null || _listener$onReconnect2 === void 0 ? void 0 : _listener$onReconnect2.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_ENDED:
            {
              var _listener$onEnded;

              (_listener$onEnded = listener.onEnded) === null || _listener$onEnded === void 0 ? void 0 : _listener$onEnded.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_REMOTE_AUDIO_SETTINGS_CHANGED:
            {
              var _listener$onRemoteAud;

              (_listener$onRemoteAud = listener.onRemoteAudioSettingsChanged) === null || _listener$onRemoteAud === void 0 ? void 0 : _listener$onRemoteAud.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_REMOTE_VIDEO_SETTINGS_CHANGED:
            {
              var _listener$onRemoteVid;

              (_listener$onRemoteVid = listener.onRemoteVideoSettingsChanged) === null || _listener$onRemoteVid === void 0 ? void 0 : _listener$onRemoteVid.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_LOCAL_VIDEO_SETTINGS_CHANGED:
            {
              var _listener$onLocalVide;

              (_listener$onLocalVide = listener.onLocalVideoSettingsChanged) === null || _listener$onLocalVide === void 0 ? void 0 : _listener$onLocalVide.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_REMOTE_RECORDING_STATUS_CHANGED:
            {
              var _listener$onRemoteRec;

              (_listener$onRemoteRec = listener.onRemoteRecordingStatusChanged) === null || _listener$onRemoteRec === void 0 ? void 0 : _listener$onRemoteRec.call(listener, this);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_CUSTOM_ITEMS_UPDATED:
            {
              var _listener$onCustomIte, _additionalData$updat;

              (_listener$onCustomIte = listener.onCustomItemsUpdated) === null || _listener$onCustomIte === void 0 ? void 0 : _listener$onCustomIte.call(listener, this, (_additionalData$updat = additionalData === null || additionalData === void 0 ? void 0 : additionalData.updatedKeys) !== null && _additionalData$updat !== void 0 ? _additionalData$updat : []);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_CUSTOM_ITEMS_DELETED:
            {
              var _listener$onCustomIte2, _additionalData$delet;

              (_listener$onCustomIte2 = listener.onCustomItemsDeleted) === null || _listener$onCustomIte2 === void 0 ? void 0 : _listener$onCustomIte2.call(listener, this, (_additionalData$delet = additionalData === null || additionalData === void 0 ? void 0 : additionalData.deletedKeys) !== null && _additionalData$delet !== void 0 ? _additionalData$delet : []);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_USER_HOLD_STATUS_CHANGED:
            {
              var _listener$onUserHoldS, _additionalData$isLoc, _additionalData$isUse;

              (_listener$onUserHoldS = listener.onUserHoldStatusChanged) === null || _listener$onUserHoldS === void 0 ? void 0 : _listener$onUserHoldS.call(listener, this, (_additionalData$isLoc = additionalData === null || additionalData === void 0 ? void 0 : additionalData.isLocalUser) !== null && _additionalData$isLoc !== void 0 ? _additionalData$isLoc : false, (_additionalData$isUse = additionalData === null || additionalData === void 0 ? void 0 : additionalData.isUserOnHold) !== null && _additionalData$isUse !== void 0 ? _additionalData$isUse : false);
              break;
            }

          case _NativeBinder.DirectCallEventType.ON_AUDIO_DEVICE_CHANGED:
            {
              if (_reactNative.Platform.OS === 'android') {
                var _listener$onAudioDevi, _additionalData$curre, _additionalData$avail;

                (_listener$onAudioDevi = listener.onAudioDeviceChanged) === null || _listener$onAudioDevi === void 0 ? void 0 : _listener$onAudioDevi.call(listener, this, {
                  platform: 'android',
                  data: {
                    currentAudioDevice: (_additionalData$curre = additionalData === null || additionalData === void 0 ? void 0 : additionalData.currentAudioDevice) !== null && _additionalData$curre !== void 0 ? _additionalData$curre : null,
                    availableAudioDevices: (_additionalData$avail = additionalData === null || additionalData === void 0 ? void 0 : additionalData.availableAudioDevices) !== null && _additionalData$avail !== void 0 ? _additionalData$avail : []
                  }
                });
              }

              if (_reactNative.Platform.OS === 'ios') {
                var _listener$onAudioDevi2, _additionalData$reaso, _additionalData$curre2, _additionalData$previ;

                (_listener$onAudioDevi2 = listener.onAudioDeviceChanged) === null || _listener$onAudioDevi2 === void 0 ? void 0 : _listener$onAudioDevi2.call(listener, this, {
                  platform: 'ios',
                  data: {
                    reason: (_additionalData$reaso = additionalData === null || additionalData === void 0 ? void 0 : additionalData.reason) !== null && _additionalData$reaso !== void 0 ? _additionalData$reaso : _types.RouteChangeReason.unknown,
                    currentRoute: (_additionalData$curre2 = additionalData === null || additionalData === void 0 ? void 0 : additionalData.currentRoute) !== null && _additionalData$curre2 !== void 0 ? _additionalData$curre2 : {
                      inputs: [],
                      outputs: []
                    },
                    previousRoute: (_additionalData$previ = additionalData === null || additionalData === void 0 ? void 0 : additionalData.previousRoute) !== null && _additionalData$previ !== void 0 ? _additionalData$previ : {
                      inputs: [],
                      outputs: []
                    }
                  }
                });
              }

              break;
            }
        }
      });

      unsubscribes.push(disposeNative, disposeInternal);
      return () => unsubscribes.forEach(fn => fn());
    });

    _defineProperty(this, "accept", async function () {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        audioEnabled: true,
        frontCamera: true,
        videoEnabled: true
      };
      let holdActiveCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      await _this._binder.nativeModule.accept(_this.callId, options, holdActiveCall);
    });

    _defineProperty(this, "end", async () => {
      await this._binder.nativeModule.end(this.callId);
    });

    _defineProperty(this, "selectVideoDevice", async device => {
      await this._binder.nativeModule.selectVideoDevice(_types.ControllableModuleType.DIRECT_CALL, this.callId, device);
    });

    _defineProperty(this, "android_selectAudioDevice", async device => {
      await this._binder.nativeModule.selectAudioDevice(_types.ControllableModuleType.DIRECT_CALL, this.callId, device);
    });

    _defineProperty(this, "muteMicrophone", () => {
      this._binder.nativeModule.muteMicrophone(_types.ControllableModuleType.DIRECT_CALL, this.callId); // NOTE: native doesn't have onLocalAudioSettingsChanged event


      this._props.isLocalAudioEnabled = false;

      this._internalEvents.emit('onPropertyUpdatedManually', this);
    });

    _defineProperty(this, "unmuteMicrophone", () => {
      this._binder.nativeModule.unmuteMicrophone(_types.ControllableModuleType.DIRECT_CALL, this.callId); // NOTE: native doesn't have onLocalAudioSettingsChanged event


      this._props.isLocalAudioEnabled = true;

      this._internalEvents.emit('onPropertyUpdatedManually', this);
    });

    _defineProperty(this, "startVideo", () => {
      this._binder.nativeModule.startVideo(_types.ControllableModuleType.DIRECT_CALL, this.callId);

      this._props.isLocalVideoEnabled = true; // NOTE: ios native doesn't have onLocalAudioSettingsChanged event

      _reactNative.Platform.OS === 'ios' && this._internalEvents.emit('onLocalVideoSettingsChanged', this);
    });

    _defineProperty(this, "stopVideo", () => {
      this._binder.nativeModule.stopVideo(_types.ControllableModuleType.DIRECT_CALL, this.callId);

      this._props.isLocalVideoEnabled = false; // NOTE: ios native doesn't have onLocalAudioSettingsChanged event

      _reactNative.Platform.OS === 'ios' && this._internalEvents.emit('onLocalVideoSettingsChanged', this);
    });

    _defineProperty(this, "switchCamera", async () => {
      await this._binder.nativeModule.switchCamera(_types.ControllableModuleType.DIRECT_CALL, this.callId);
    });

    _defineProperty(this, "updateLocalVideoView", videoViewId => {
      this._binder.nativeModule.updateLocalVideoView(this.callId, videoViewId);
    });

    _defineProperty(this, "updateRemoteVideoView", videoViewId => {
      this._binder.nativeModule.updateRemoteVideoView(this.callId, videoViewId);
    });

    this._binder = binder;
    this._props = props;
  }

  _updateInternal(props) {
    this._props = props;
    return this;
  }

  get ios_callUUID() {
    return this._props.ios_callUUID;
  }

  get android_availableAudioDevices() {
    return this._props.android_availableAudioDevices;
  }

  get android_currentAudioDevice() {
    return this._props.android_currentAudioDevice;
  }

  get availableVideoDevices() {
    return this._props.availableVideoDevices;
  }

  get callId() {
    return this._props.callId;
  }

  get callLog() {
    return this._props.callLog;
  }

  get callee() {
    return this._props.callee;
  }

  get caller() {
    return this._props.caller;
  }

  get currentVideoDevice() {
    return this._props.currentVideoDevice;
  }

  get customItems() {
    return this._props.customItems;
  }

  get startedAt() {
    return this._props.startedAt;
  }

  get duration() {
    if (this.startedAt > 0) {
      return Math.max(0, Date.now() - this.startedAt);
    } else if (this._props.duration > 0) {
      return this._props.duration;
    } else {
      return 0;
    }
  }

  get endedBy() {
    return this._props.endedBy;
  }

  get isEnded() {
    return this._props.isEnded;
  }

  get isLocalAudioEnabled() {
    return this._props.isLocalAudioEnabled;
  }

  get isLocalScreenShareEnabled() {
    return this._props.isLocalScreenShareEnabled;
  }

  get isLocalVideoEnabled() {
    return this._props.isLocalVideoEnabled;
  }

  get isOnHold() {
    return this._props.isOnHold;
  }

  get isOngoing() {
    return this._props.isOngoing;
  }

  get isRemoteAudioEnabled() {
    return this._props.isRemoteAudioEnabled;
  }

  get isRemoteVideoEnabled() {
    return this._props.isRemoteVideoEnabled;
  }

  get isVideoCall() {
    return this._props.isVideoCall;
  }

  get localRecordingStatus() {
    return this._props.localRecordingStatus;
  }

  get localUser() {
    return this._props.localUser;
  }

  get myRole() {
    return this._props.myRole;
  }

  get remoteRecordingStatus() {
    return this._props.remoteRecordingStatus;
  }

  get remoteUser() {
    return this._props.remoteUser;
  }

  get endResult() {
    return this._props.endResult;
  }
  /**
   * Add DirectCall listener.
   * supports multiple listeners.
   *
   * @since 1.0.0
   */


}

exports.DirectCall = DirectCall;

_defineProperty(DirectCall, "pool", {});
//# sourceMappingURL=DirectCall.js.map