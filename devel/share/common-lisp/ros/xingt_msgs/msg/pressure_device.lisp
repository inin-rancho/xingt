; Auto-generated. Do not edit!


(cl:in-package xingt_msgs-msg)


;//! \htmlinclude pressure_device.msg.html

(cl:defclass <pressure_device> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (data
    :reader data
    :initarg :data
    :type cl:float
    :initform 0.0))
)

(cl:defclass pressure_device (<pressure_device>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <pressure_device>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'pressure_device)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name xingt_msgs-msg:<pressure_device> is deprecated: use xingt_msgs-msg:pressure_device instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <pressure_device>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader xingt_msgs-msg:header-val is deprecated.  Use xingt_msgs-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'data-val :lambda-list '(m))
(cl:defmethod data-val ((m <pressure_device>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader xingt_msgs-msg:data-val is deprecated.  Use xingt_msgs-msg:data instead.")
  (data m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <pressure_device>) ostream)
  "Serializes a message object of type '<pressure_device>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'data))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <pressure_device>) istream)
  "Deserializes a message object of type '<pressure_device>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'data) (roslisp-utils:decode-double-float-bits bits)))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<pressure_device>)))
  "Returns string type for a message object of type '<pressure_device>"
  "xingt_msgs/pressure_device")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'pressure_device)))
  "Returns string type for a message object of type 'pressure_device"
  "xingt_msgs/pressure_device")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<pressure_device>)))
  "Returns md5sum for a message object of type '<pressure_device>"
  "e6c99c37e6f9fe98e071d524cc164e65")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'pressure_device)))
  "Returns md5sum for a message object of type 'pressure_device"
  "e6c99c37e6f9fe98e071d524cc164e65")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<pressure_device>)))
  "Returns full string definition for message of type '<pressure_device>"
  (cl:format cl:nil "Header header~%float64  data~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'pressure_device)))
  "Returns full string definition for message of type 'pressure_device"
  (cl:format cl:nil "Header header~%float64  data~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <pressure_device>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     8
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <pressure_device>))
  "Converts a ROS message object to a list"
  (cl:list 'pressure_device
    (cl:cons ':header (header msg))
    (cl:cons ':data (data msg))
))
